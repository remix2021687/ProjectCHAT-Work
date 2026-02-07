from rest_framework import serializers
from users.models import CustomUser
from posts.models import Post, Comment


class UserSerializer(serializers.ModelSerializer):
    class Meta:
        model = CustomUser
        fields = ('id', 'last_name', 'first_name', 'avatar',)

class CommentSerializer(serializers.ModelSerializer):
    user = UserSerializer()

    class Meta:
        model = Comment
        fields = ('id', 'text', 'user')

class PostListSerializer(serializers.ModelSerializer):
    class Meta:
        model = Post
        fields = ('id', 'title', 'created_at')

class PostSerializer(serializers.ModelSerializer):
    user = UserSerializer()
    comments = CommentSerializer(read_only=True, many=True)

    class Meta:
        model = Post
        fields = ('id', 'title', 'content', 'comments', 'user', 'created_at')

