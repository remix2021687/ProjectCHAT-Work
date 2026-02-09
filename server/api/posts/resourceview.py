from rest_framework.decorators import action
from rest_framework.permissions import IsAuthenticatedOrReadOnly, IsAuthenticated
from rest_framework.viewsets import ModelViewSet
from rest_framework.response import Response
from rest_framework import status
from .serializer import PostSerializer, PostListSerializer
from posts.models import Post

class PostViewSet(ModelViewSet):
    queryset = Post.objects.all()
    permission_classes = [IsAuthenticated]

    def get_serializer_class(self):
        if self.action == "list":
            return PostListSerializer
        return PostSerializer

    @action(detail=True, methods=["post"])
    def like(self, request, pk=None):
        post = self.get_object()
        user = request.user

        if post.likes.filter(id=user.id).exists():
            post.likes.remove(user)
            is_liked = False

        else:
            post.likes.add(user)
            is_liked = True

        return Response({
            "is_liked": is_liked,
            "likes_count": post.likes_count
        }, status=status.HTTP_200_OK)

