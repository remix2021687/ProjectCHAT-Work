import uuid
from django.db import models
from django.contrib.auth.models import User

#Main Chat Model
class ChatMessage(models.Model):
    id = models.UUIDField(default=uuid.uuid4, primary_key=True, editable=False)
    sender = models.ForeignKey(User, on_delete=models.CASCADE)
    created_at = models.DateTimeField(auto_now_add=True)

    def __str__(self):
        return f"Chat ID: {self.id}"

#Message on chat
class Message(models.Model):
    id = models.UUIDField(default=uuid.uuid4, primary_key=True, editable=False)
    chat_message = models.ForeignKey(ChatMessage, related_name='messages', on_delete=models.CASCADE)
    message = models.TextField()
    timestamp = models.DateTimeField(auto_now_add=True)

    class Meta:
        ordering = ['timestamp']

    def __str__(self):
        return f"{self.chat_message.sender.username}: {self.message[:20]}..."
    
