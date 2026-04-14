import { useUploadImage } from "@/features/useUploadImage";
import { useState } from "react";
import { Controller, type Control, type FieldValues, type Path } from "react-hook-form";
import { Input } from "../ui/input";

interface UploadImageProps<T extends FieldValues>  {
    control: Control<T>;
    name: Path<T>;
}

export const UploadImage = <T extends FieldValues>({ control, name }: UploadImageProps<T>) => {
    const [preview, setPreview] = useState<string | null>(null);

    const { mutateAsync, isPending} = useUploadImage();
  return (
    <Controller
      control={control}
      name={name}
      render={({ field: { onChange } }) => (
        <div className="flex flex-col gap-2">
          <Input
            type="file"
            accept="image/*"
            onChange={async (e) => {
              const file = e.target.files?.[0];
              if (!file) return;

              // preview
              const localPreview = URL.createObjectURL(file);
              setPreview(localPreview);

              try {
                const url = await mutateAsync(file);
                console.log(url);
                onChange(url); 
              } catch (err) {
                console.error(err);
              }
            }}
          />

          {isPending && <p>Uploading...</p>}

          {preview && (
            <img
              src={preview}
              alt="preview"
              className="w-32 h-32 object-cover rounded-md"
            />
          )}
        </div>
      )}
    />
  )
}
