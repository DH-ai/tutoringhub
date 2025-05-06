from django.urls import path
from .views import CourseListView, CourseDetailView, CourseRegistrationView, CourseRegistrationDetailView

urlpatterns = [
    # Course-related URLs
    path('courses/', CourseListView.as_view(), name='course-list'),
    path('courses/<int:pk>/', CourseDetailView.as_view(), name='course-detail'),

    # Course Registration-related URLs
    path('registrations/', CourseRegistrationView.as_view(), name='course-registration-list'),
    path('registrations/<int:pk>/', CourseRegistrationDetailView.as_view(), name='course-registration-detail'),
]
