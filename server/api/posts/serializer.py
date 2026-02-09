from rest_framework import serializers
from users.models import CustomUser
from posts.models import Post, Comment


class UserSerializer(serializers.ModelSerializer):
    class Meta:
        model = CustomUser
        fields = ('id', 'last_name', 'first_name', 'avatar',)

class CommentSerializer(serializers.ModelSerializer):
    user = UserSerializer(read_only=True)

    class Meta:
        model = Comment
        fields = ('id', 'text', 'user')

class PostListSerializer(serializers.ModelSerializer):
    likes_count = serializers.ReadOnlyField()
    is_liked = serializers.SerializerMethodField()

    class Meta:
        model = Post
        fields = ('id', 'title', 'likes_count', "is_liked", 'created_at')

    def get_is_liked(self, obj):
        user = self.context['request'].user
        return obj.is_liked_by(user)

class PostSerializer(serializers.ModelSerializer):
    user = UserSerializer(read_only=True)
    comments = CommentSerializer(read_only=True, many=True)
    likes_count = serializers.ReadOnlyField()
    is_liked = serializers.SerializerMethodField()

    class Meta:
        model = Post
        fields = ('id', 'title', 'likes_count', 'is_liked', 'content', 'comments', 'user', 'created_at')

    def get_is_liked(self, obj):
        user = self.context['request'].user
        return obj.is_liked_by(user)