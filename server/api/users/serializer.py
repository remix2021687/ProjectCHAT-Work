from rest_framework import serializers

from posts.models import Post
from users.models import CustomUser, Profile, Connect, VerificationRequest


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


class VerificationRequestSerializer(serializers.ModelSerializer):
    class Meta:
        model = VerificationRequest
        fields = ('id', 'first_name', 'last_name', 'content', 'birth_date', 'is_approved')
        extra_kwargs = {
            'first_name': {'read_only': True},
            'last_name': {'read_only': True},
            'content': {'read_only': True},
            'birth_date': {'read_only': True},
        }


class VerificationResponseSerializer(serializers.ModelSerializer):
    message = serializers.CharField(max_length=200, allow_blank=False)
    approved = serializers.BooleanField(default=False, allow_null=False)

    class Meta:
        model = VerificationRequest
        fields = ('message', 'approved')


class ProfileSerializer(serializers.ModelSerializer):
    user = UserSerializer(read_only=True)
    posts = ProfileOwnPostSerializer(read_only=True, many=True, source='user.post')
    connects = ProfileConnectSerializer(read_only=True, many=True)

    class Meta:
        model = Profile
        fields = ('user', 'avatar', 'banner', 'bio', 'followers_count', 'following_count', 'connects', 'posts')
