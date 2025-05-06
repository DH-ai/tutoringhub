import { useState } from "react";
import { Upload, X } from "lucide-react";

interface CourseFormProps {
  onSubmit: (data: CourseFormData) => void;
  initialData?: CourseFormData;
}

export interface CourseFormData {
  title: string;
  description: string;
  youtubePlaylistUrl: string;
  thumbnail: File | null;
  category: string;
  level: string;
  price: number;
}

const categories = [
  "Programming",
  "Mathematics",
  "Science",
  "Language",
  "Business",
  "Arts",
  "Music",
  "Other",
];

const levels = ["Beginner", "Intermediate", "Advanced"];

export default function CourseForm({ onSubmit, initialData }: CourseFormProps) {
  const [formData, setFormData] = useState<CourseFormData>(
    initialData || {
      title: "",
      description: "",
      youtubePlaylistUrl: "",
      thumbnail: null,
      category: "",
      level: "",
      price: 0,
    }
  );

  const [thumbnailPreview, setThumbnailPreview] = useState<string | null>(null);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onSubmit(formData);
  };

  const handleThumbnailChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      setFormData({ ...formData, thumbnail: file });
      const reader = new FileReader();
      reader.onloadend = () => {
        setThumbnailPreview(reader.result as string);
      };
      reader.readAsDataURL(file);
    }
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-6">
      <div>
        <label className="block text-sm font-medium text-foreground mb-2">
          Course Title
        </label>
        <input
          type="text"
          className="input w-full"
          value={formData.title}
          onChange={(e) => setFormData({ ...formData, title: e.target.value })}
          placeholder="Enter course title"
          required
        />
      </div>

      <div>
        <label className="block text-sm font-medium text-foreground mb-2">
          Description
        </label>
        <textarea
          className="input w-full min-h-[150px]"
          value={formData.description}
          onChange={(e) => setFormData({ ...formData, description: e.target.value })}
          placeholder="Describe your course..."
          required
        />
      </div>

      <div>
        <label className="block text-sm font-medium text-foreground mb-2">
          YouTube Playlist URL
        </label>
        <input
          type="url"
          className="input w-full"
          value={formData.youtubePlaylistUrl}
          onChange={(e) => setFormData({ ...formData, youtubePlaylistUrl: e.target.value })}
          placeholder="https://www.youtube.com/playlist?list=..."
          required
        />
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div>
          <label className="block text-sm font-medium text-foreground mb-2">
            Category
          </label>
          <select
            className="input w-full"
            value={formData.category}
            onChange={(e) => setFormData({ ...formData, category: e.target.value })}
            required
          >
            <option value="">Select a category</option>
            {categories.map((category) => (
              <option key={category} value={category}>
                {category}
              </option>
            ))}
          </select>
        </div>

        <div>
          <label className="block text-sm font-medium text-foreground mb-2">
            Level
          </label>
          <select
            className="input w-full"
            value={formData.level}
            onChange={(e) => setFormData({ ...formData, level: e.target.value })}
            required
          >
            <option value="">Select a level</option>
            {levels.map((level) => (
              <option key={level} value={level}>
                {level}
              </option>
            ))}
          </select>
        </div>
      </div>

      <div>
        <label className="block text-sm font-medium text-foreground mb-2">
          Price (USD)
        </label>
        <input
          type="number"
          className="input w-full"
          value={formData.price}
          onChange={(e) => setFormData({ ...formData, price: Number(e.target.value) })}
          min="0"
          step="0.01"
          required
        />
      </div>

      <div>
        <label className="block text-sm font-medium text-foreground mb-2">
          Course Thumbnail
        </label>
        <div className="mt-1 flex justify-center px-6 pt-5 pb-6 border-2 border-dashed rounded-lg">
          <div className="space-y-1 text-center">
            {thumbnailPreview ? (
              <div className="relative">
                <img
                  src={thumbnailPreview}
                  alt="Thumbnail preview"
                  className="mx-auto h-32 w-auto rounded-lg object-cover"
                />
                <button
                  type="button"
                  className="absolute -top-2 -right-2 p-1 rounded-full bg-error text-white"
                  onClick={() => {
                    setFormData({ ...formData, thumbnail: null });
                    setThumbnailPreview(null);
                  }}
                >
                  <X className="h-4 w-4" />
                </button>
              </div>
            ) : (
              <>
                <Upload className="mx-auto h-12 w-12 text-muted-foreground" />
                <div className="flex text-sm text-muted-foreground">
                  <label
                    htmlFor="thumbnail-upload"
                    className="relative cursor-pointer rounded-md font-medium text-primary hover:text-primary-dark"
                  >
                    <span>Upload a file</span>
                    <input
                      id="thumbnail-upload"
                      name="thumbnail-upload"
                      type="file"
                      className="sr-only"
                      accept="image/*"
                      onChange={handleThumbnailChange}
                    />
                  </label>
                  <p className="pl-1">or drag and drop</p>
                </div>
                <p className="text-xs text-muted-foreground">
                  PNG, JPG, GIF up to 10MB
                </p>
              </>
            )}
          </div>
        </div>
      </div>

      <div className="flex justify-end">
        <button type="submit" className="btn btn-primary px-6 py-2">
          {initialData ? "Update Course" : "Create Course"}
        </button>
      </div>
    </form>
  );
} 