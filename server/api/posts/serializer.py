from rest_framework import serializers
from users.models import CustomUser
from posts.models import Post, Comment


class UserSerializer(serializers.ModelSerializer):
    class Meta:
        model = CustomUser
        fields = ('id', 'last_name', 'first_name', 'username', 'is_verified')


class CommentSerializer(serializers.ModelSerializer):
    user = UserSerializer(read_only=True)
    is_liked = serializers.SerializerMethodField()
    likes_count_comment = serializers.ReadOnlyField()

    class Meta:
        model = Comment
        fields = ('id', 'is_liked', 'likes_count_comment', 'text', 'post', 'user', 'created_at', 'updated_at')

    def get_is_liked(self, obj):
        user = self.context['request'].user
        return obj.is_liked_by_comment(user)


class CommentCreateSerializer(serializers.ModelSerializer):
    user = UserSerializer(read_only=True)

    class Meta:
        model = Comment
        fields = ('id', 'text', 'user')


class PostListSerializer(serializers.ModelSerializer):
    post_likes_count = serializers.ReadOnlyField()
    is_liked = serializers.SerializerMethodField()
    comments_count = serializers.ReadOnlyField()

    class Meta:
        model = Post
        fields = ('id', 'title', 'post_likes_count', 'comments_count', 'is_liked', 'created_at')

    def get_is_liked(self, obj):
        user = self.context['request'].user
        return obj.is_liked_by_post(user)


class PostSerializer(serializers.ModelSerializer):
    user = UserSerializer(read_only=True)
    comments = CommentSerializer(read_only=True, many=True)
    comments_count = serializers.ReadOnlyField()
    post_likes_count = serializers.ReadOnlyField()
    is_liked = serializers.SerializerMethodField()

    class Meta:
        model = Post
        fields = ('id', 'title', 'post_likes_count', 'is_liked', 'content', 'comments_count', 'comments', 'user',
                  'created_at')

    def get_is_liked(self, obj):
        user = self.context['request'].user
        return obj.is_liked_by_post(user)
