from rest_framework import viewsets
from rest_framework.permissions import IsAuthenticated
from users.models import CustomUser, Profile
from .serializer import ProfileSerializer
from users.permissions import IsOwner

class ProfileViewSet(viewsets.ModelViewSet):
    serializer_class = ProfileSerializer
    permission_classes = [IsAuthenticated, IsOwner]

    def get_queryset(self):
        return Profile.objects.filter(user=self.request.user)
