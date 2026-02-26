from rest_framework import serializers
from users.models import CustomUser, Profile
from posts.models import Post

class UserSerializer(serializers.ModelSerializer):

    class Meta:
        model = CustomUser
        fields = ('id', 'first_name', 'last_name', 'username', 'email', 'is_staff', 'is_verified')

class ProfileOwnPostSerializer(serializers.ModelSerializer):
    class Meta:
        model = Post
        fields = ('id', 'title', 'content', 'post_likes_count', 'created_at')

class ProfileSerializer(serializers.ModelSerializer):
    user = UserSerializer(read_only=True)
    posts = ProfileOwnPostSerializer(read_only=True, many=True, source='user.post')

    class Meta:
        model = Profile
        fields = ('user', 'avatar', 'banner', 'bio', 'followers_count', 'following_count', 'posts')