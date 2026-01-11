from rest_framework import serializers
from chat.models import ChatMessage, Message



class ChatMessageSerializer(serializers.ModelSerializer):
    class Meta:
        model = ChatMessage
        fields = ("id", "sender", "created_at")
