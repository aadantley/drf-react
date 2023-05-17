from .models import Event
from .serializers import EventSerializer
from rest_framework import generics


class EventCreateView(generics.ListCreateAPIView):
    """
    A view to list and create events

    Args: **not applicable**
    """

    queryset = Event.objects.all()
    serializer_class = EventSerializer
