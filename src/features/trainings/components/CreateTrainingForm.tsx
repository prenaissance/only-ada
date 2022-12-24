import { useForm } from "react-hook-form";
import { z } from "zod";
import { TextField, Button, InputLabel } from "@mui/material";
import { zodResolver } from "@hookform/resolvers/zod";
import GridContainer from "@components/ui/GridContainer";
import { axiosPublic } from "@api/axios-public";
import { useNotification } from "@components/NotificationProvider";
import FileUpload from "@features/upload/components/FileUpload";

const TrainingFormSchema = z.object({
  name: z.string().min(2),
  price: z.string().transform(value => Number(value)),
  category: z.string().min(2),
  image: z.string().url(),
});

type TrainingFormData = z.infer<typeof TrainingFormSchema>;

const CreateTrainingForm = () => {
  const { postNotification } = useNotification();
  const {
    reset,
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<TrainingFormData>({
    resolver: zodResolver(TrainingFormSchema),
    mode: "onBlur",
    defaultValues: {
      image: "https://picsum.photos/200/200",
    },
  });

  const onSubmit = async (data: TrainingFormData) => {
    try {
      await axiosPublic.post("/trainings", data);
      postNotification("Training created successfully", "success");

      reset();
    } catch (err) {
      const error = err as Error;
      console.error(error);
      postNotification(`Training creation failed ${error.message}`, "error");
    }
  };

  return (
    <GridContainer>
      <form className="mx-auto" onSubmit={handleSubmit(onSubmit)}>
        <InputLabel htmlFor="name">Name</InputLabel>
        <TextField fullWidth id="name" {...register("name")} helperText={errors.name?.message} error={!!errors.name} />
        <br />
        <InputLabel htmlFor="price">Price</InputLabel>
        <TextField
          fullWidth
          id="price"
          {...register("price")}
          helperText={errors.price?.message}
          error={!!errors.price}
        />
        <br />
        <InputLabel htmlFor="category">Category</InputLabel>
        <TextField
          fullWidth
          id="category"
          {...register("category")}
          helperText={errors.category?.message}
          error={!!errors.category}
        />
        <br />
        <FileUpload />
        <Button sx={{ mt: "0.5rem" }} fullWidth variant="contained" type="submit">
          Create Course
        </Button>
      </form>
    </GridContainer>
  );
};

export default CreateTrainingForm;
