import uuid
from django.db import models

class Post(models.Model):
    id = models.UUIDField(primary_key=True, default=uuid.uuid4, editable=False)
    photo = models.ImageField(upload_to="posts/photos", blank=True)
    video = models.FileField(upload_to="posts/videos", blank=True)
    title = models.CharField(max_length=255, blank=False, null=False)
    content = models.TextField(blank=False, null=False, max_length=3000)
    user = models.ForeignKey('users.CustomUser', on_delete=models.CASCADE, related_name="post")
    likes = models.ManyToManyField('users.CustomUser', related_name="liked_posts", blank=True)
    created_at = models.DateTimeField(auto_now_add=True)
    updated_at = models.DateTimeField(auto_now=True)

    @property
    def post_likes_count(self):
        return self.likes.count()

    def is_liked_by_post(self, user):
        if not user.is_authenticated:
            return False
        return self.likes.filter(id=user.id).exists()

    def __str__(self):
        return f'{self.title} | {self.user.username}'

class Comment(models.Model):
    id = models.UUIDField(primary_key=True, default=uuid.uuid4, editable=False)
    post = models.ForeignKey(Post, on_delete=models.CASCADE, related_name="comments")
    user = models.ForeignKey('users.CustomUser', on_delete=models.CASCADE, related_name="comments")
    likes = models.ManyToManyField('users.CustomUser', related_name="liked_comments", blank=True)
    text = models.TextField(blank=False, null=False, max_length=3000)
    created_at = models.DateTimeField(auto_now_add=True)
    updated_at = models.DateTimeField(auto_now=True)

    @property
    def likes_count_comment(self):
        return self.likes.count()

    def is_liked_by_comment(self, user):
        if not user.is_authenticated:
            return False
        return self.likes.filter(id=user.id).exists()


    def __str__(self):
        return f'Comment by {self.user.username} on {self.post.title}'

