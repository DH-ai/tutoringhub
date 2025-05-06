from rest_framework import generics
from .models import Course, CourseRegistration
from .serializers import CourseSerializer, CourseRegistrationSerializer
from rest_framework.permissions import IsAuthenticated
from rest_framework.exceptions import PermissionDenied
# Course views
class CourseListView(generics.ListCreateAPIView):
    queryset = Course.objects.all()
    serializer_class = CourseSerializer
    
    # def perform_create(self, serializer):
    #     if (self.request.user.role != 'teacher' or self.request.user.role != 'Teacher' ):
    #         # Stop here with a 403, so students can’t create courses
    #         raise PermissionDenied("Only teachers can create courses.")
    #     serializer.save(teacher=self.request.user)

  

class CourseDetailView(generics.RetrieveUpdateDestroyAPIView):
    queryset = Course.objects.all()
    serializer_class = CourseSerializer
    permission_classes = [IsAuthenticated]  # Optional, if you want to require auth

# CourseRegistration views
class CourseRegistrationView(generics.ListCreateAPIView):
    queryset = CourseRegistration.objects.all()
    serializer_class = CourseRegistrationSerializer
    permission_classes = [IsAuthenticated]

    def perform_create(self, serializer):
        # Automatically set the student (assuming the user is logged in)
        serializer.save(student=self.request.user)

class CourseRegistrationDetailView(generics.RetrieveDestroyAPIView):
    queryset = CourseRegistration.objects.all()
    serializer_class = CourseRegistrationSerializer
    permission_classes = [IsAuthenticated]
