from rest_framework import serializers
from .models import Course, CourseRegistration
from users_service.models import User

class CourseSerializer(serializers.ModelSerializer):
    class Meta:
        model = Course
        fields = '__all__'

    def validate_teacher(self, value):
        if value.role != 'teacher':
            raise serializers.ValidationError("Only users with role='teacher' can be assigned as course creators.")
        return value


# Serializer for CourseRegistration model
class CourseRegistrationSerializer(serializers.ModelSerializer):
    student = serializers.PrimaryKeyRelatedField(queryset=User.objects.filter(role='student'))
    course = serializers.PrimaryKeyRelatedField(queryset=Course.objects.all())

    class Meta:
        model = CourseRegistration
        fields = ['id', 'student', 'course', 'registered_at']
