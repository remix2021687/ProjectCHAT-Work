from rest_framework import status
from rest_framework.viewsets import ModelViewSet
from rest_framework.permissions import IsAuthenticated
from rest_framework.response import Response

from chat.models import ChatRoom
from .serializer import ChatRoomSerializer, ChatRoomListSerializer

class ChatRoomViewSet(ModelViewSet):
    queryset = ChatRoom.objects.all()
    permission_classes = [IsAuthenticated]

    def get_serializer_class(self):
        if self.action == "list":
            return ChatRoomListSerializer
        return ChatRoomSerializer

    def create(self, request, *args, **kwargs):
        return Response(status.HTTP_405_METHOD_NOT_ALLOWED, status=status.HTTP_405_METHOD_NOT_ALLOWED)
    def update(self, request, *args, **kwargs):
        return Response(status.HTTP_405_METHOD_NOT_ALLOWED, status=status.HTTP_405_METHOD_NOT_ALLOWED)
    def destroy(self, request, *args, **kwargs):
        return Response(status.HTTP_405_METHOD_NOT_ALLOWED, status=status.HTTP_405_METHOD_NOT_ALLOWED)
