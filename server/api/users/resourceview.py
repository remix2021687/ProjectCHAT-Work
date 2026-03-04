from rest_framework import viewsets, status
from rest_framework.decorators import action
from rest_framework.permissions import IsAuthenticated, IsAdminUser
from rest_framework.response import Response

from users.models import Profile, Connect, VerificationRequest
from .serializer import ProfileSerializer, ProfileConnectSerializer, VerificationRequestSerializer, \
    VerificationResponseSerializer, VerificationRequestCreateSerializer


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
            connect = Connect.objects.get(pk=pk)
            serializer = ProfileConnectSerializer(connect, data=request.data, partial=True)

            if connect in request.user.profile.connects.all():
                if serializer.is_valid():
                    serializer.save()
                    return Response(serializer.data, status=status.HTTP_200_OK)
                else:
                    return Response(serializer.errors, status=status.HTTP_401_UNAUTHORIZED)
            return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)

        except Connect.DoesNotExist:
            return Response({"error": "Link does not exist"}, status=status.HTTP_404_NOT_FOUND)

    @action(detail=False, methods=['delete'], url_path='connect/(?P<pk>[0-9a-fA-F-]+)/delete')
    def remove_connect(self, request, pk=None):
        try:
            connect = Connect.objects.get(id=pk)
            if connect:
                request.user.profile.connects.remove(connect)
                connect.delete()
                return Response(status=status.HTTP_204_NO_CONTENT)
            return Response(status=status.HTTP_404_NOT_FOUND)

        except Connect.DoesNotExist:
            return Response({"error": "Link does not exist"}, status=status.HTTP_404_NOT_FOUND)

    @action(detail=False, methods=['post'], url_path='verify')
    def verify_profile(self, request):
        serializer = VerificationRequestCreateSerializer(data=request.data)
        verify_request = VerificationRequest.objects.filter(user=request.user)

        if serializer.is_valid():
            if not verify_request:
                serializer.save(user=request.user)
                return Response("Request for Verification is created! Have a good day", status=status.HTTP_201_CREATED)
            else:
                return Response("Request is Watching ! Check request later", status=status.HTTP_405_METHOD_NOT_ALLOWED)

        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)


class VerificationRequestViewSet(viewsets.ModelViewSet):
    serializer_class = VerificationRequestCreateSerializer
    permission_classes = [IsAuthenticated, IsAdminUser]

    def get_queryset(self):
        return VerificationRequest.objects.filter(status="PENDING")

    def create(self, request, *args, **kwargs):
        return Response("405", status=status.HTTP_405_METHOD_NOT_ALLOWED)

    def destroy(self, request, *args, **kwargs):
        return Response("405", status=status.HTTP_405_METHOD_NOT_ALLOWED)

    @action(detail=True, methods=['put'], url_path='approve')
    def approve(self, request, pk=None):
        verification_request = VerificationRequest.objects.get(pk=pk)
        serializer = VerificationResponseSerializer(verification_request, data=request.data, partial=True)
        if serializer.is_valid():
            serializer.save()
            return Response(serializer.data, status=status.HTTP_201_CREATED)
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)
