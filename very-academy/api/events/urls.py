from django.urls import path
from . import views

urlpatterns = [
    path("events/", views.EventCreateView.as_view(), name="event-list-create"),
]
