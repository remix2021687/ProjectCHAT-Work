from rest_framework import serializers
from django.contrib.auth import authenticate
from datetime import date

from posts.models import Post
from users.models import CustomUser, Profile, Connect, VerificationRequest, Notification, UserPunishment


class UserSerializer(serializers.ModelSerializer):
    class Meta:
        model = CustomUser
        fields = ('id', 'first_name', 'last_name', 'username', 'email', 'is_staff', 'is_verified')


class ProfileConnectSerializer(serializers.ModelSerializer):
    class Meta:
        model = Connect
        fields = ('id', 'name', 'url')


class ProfileOwnPostSerializer(serializers.ModelSerializer):
    class Meta:
        model = Post
        fields = ('id', 'title', 'content', 'post_likes_count', 'created_at')


class VerificationRequestCreateSerializer(serializers.ModelSerializer):
    class Meta:
        model = VerificationRequest
        fields = ('id', 'user', 'first_name', 'last_name', 'content', 'birth_date')
        extra_kwargs = {
            'birth_date': {'required': True},
        }


class VerificationResponseSerializer(serializers.ModelSerializer):
    class Meta:
        model = VerificationRequest
        fields = ('status', 'note_admin')

    def save(self, **kwargs):
        instance = super().save(**kwargs)

        if instance.status == "APPROVED":
            user = instance.user

            Notification.objects.create(
                user=user,
                type="System",
                content="Your account has been verified. Have a good day !",
            )
            user.is_verified = True
            user.save(update_fields=['is_verified'])

        return instance


class NotificationSerializer(serializers.ModelSerializer):
    class Meta:
        model = Notification
        fields = ('id', 'type', 'content')


class ProfileSerializer(serializers.ModelSerializer):
    user = UserSerializer(read_only=True)
    posts = ProfileOwnPostSerializer(read_only=True, many=True, source='user.post')
    connects = ProfileConnectSerializer(read_only=True, many=True)
    notifications = NotificationSerializer(read_only=True, many=True, source='user.notification')

    class Meta:
        model = Profile
        fields = ('user', 'avatar', 'banner', 'bio', 'followers_count', 'following_count', 'notifications', 'connects',
                  'posts')


class RegisterSerializer(serializers.ModelSerializer):
    password = serializers.CharField(write_only=True, required=True, style={'input_type': 'password'})
    password_confirm = serializers.CharField(write_only=True, required=True, style={'input_type': 'password'})

    class Meta:
        model = CustomUser
        fields = ('first_name', 'last_name', 'username', 'email', 'password', 'password_confirm')

    def validate(self, attrs):
        password = attrs.get('password')
        password_confirm = attrs.get('password_confirm')

        if password != password_confirm:
            raise serializers.ValidationError({'password_confirm': 'Passwords do not match'})
        else:
            attrs.pop('password_confirm')
            return attrs


class LoginSerializer(serializers.Serializer):
    email = serializers.EmailField(required=True)
    password = serializers.CharField(write_only=True, required=True, style={'input_type': 'password'})

    class Meta:
        model = CustomUser
        fields = ('email', 'password')

    def validate(self, attrs):
        user = authenticate(email=attrs['email'], password=attrs['password'])

        if user is None:
            raise serializers.ValidationError({"errors": attrs})

        return {'user': user}


class UserPunishmentSerializer(serializers.ModelSerializer):
    class Meta:
        model = UserPunishment
        fields = ('id', 'user', 'staff', 'type', 'time', 'reason', 'created_at')

    def save(self, **kwargs):
        instance = super().save(**kwargs)

        if instance.type == 'BAN':
            Notification.objects.create(
                user=instance.user,
                type="System",
                content="You have been permanent banned !",
            )
        elif instance.type == 'BAN' and instance.time:
            time = instance.time
            Notification.objects.create(
                user=instance.user,
                type="System",
                content=f"You have been temporary banned on {time - date.today()} !",
            )

        elif instance.type == 'MUTE' and instance.time:
            Notification.objects.create(
                user=instance.user,
                type="System",
                content="You have been permanent muted !",
            )

        elif instance.type == 'MUTE' and instance.time:
            time = instance.time
            Notification.objects.create(
                user=instance.user,
                type="System",
                content=f"You have been temporary muted on {time - date.today()} !",
            )
