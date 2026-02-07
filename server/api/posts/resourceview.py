from rest_framework.permissions import IsAuthenticated
from rest_framework.viewsets import ModelViewSet
# from rest_framework.response import Response
from .serializer import PostSerializer, PostListSerializer
from posts.models import Post

class PostViewSet(ModelViewSet):
    queryset = Post.objects.all()

    def get_serializer_class(self):
        if self.action == "list":
            return PostListSerializer
        return PostSerializer

    permission_classes = [IsAuthenticated]
