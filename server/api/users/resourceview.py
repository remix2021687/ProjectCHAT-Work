from rest_framework.decorators import action
from rest_framework.response import Response
from rest_framework import viewsets, status
from rest_framework.permissions import IsAuthenticated
from users.models import Profile, Connect
from .serializer import ProfileSerializer, ProfileConnectSerializer
from users.permissions import IsOwner

class ProfileViewSet(viewsets.ModelViewSet):
    serializer_class = ProfileSerializer
    permission_classes = [IsAuthenticated]

    def get_queryset(self):
        return Profile.objects.filter(user=self.request.user)

    @action(detail=False, methods=['post'])
    def add_connect(self, request):
        serializer = ProfileConnectSerializer(data=request.data)

        if serializer.is_valid():
            connect = serializer.save()
            request.user.profile.connects.add(connect)
            return Response(serializer.data, status=status.HTTP_201_CREATED)
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)
    
    @action(detail=False, methods=['patch'], url_path='connect/(?P<pk>[0-9a-fA-F-]+)/update')
    def update_connect(self, request, pk=None):
        try:
            connect = Profile.objects.get(pk=pk)
            serializer = ProfileConnectSerializer(connect, data=request.data)

            if serializer.is_valid():
                serializer.save()
                return Response(serializer.data, status=status.HTTP_200_OK)
            return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)

        except Connect.DoesNotExist:
            return Response({
                "error": "Link does not exist"
            }, status=status.HTTP_404_NOT_FOUND)

    @action(detail=False, methods=['delete'], url_path='connect/(?P<pk>[^/]+)/delete')
    def remove_connect(self, request, pk=None):
        try:
            connect = Profile.objects.get(pk=pk)
            if connect.user.profile.connects.all():
                request.user.profile.connects.remove(connect)
                connect.delete()
                return Response(status=status.HTTP_204_NO_CONTENT)
            return Response(status=status.HTTP_404_NOT_FOUND)

        except Connect.DoesNotExist:
            return Response({
                "error": "Link does not exist"
            }, status=status.HTTP_404_NOT_FOUND)