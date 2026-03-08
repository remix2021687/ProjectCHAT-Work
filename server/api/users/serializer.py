from rest_framework import serializers

from posts.models import Post
from users.models import CustomUser, Profile, Connect, VerificationRequest, Notification


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
