import React from "react";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { TextField, Button, InputLabel } from "@mui/material";
import { zodResolver } from "@hookform/resolvers/zod";
import GridContainer from "@components/ui/GridContainer";
import { axiosPublic } from "@api/axios-public";

const TrainingFormSchema = z.object({
  name: z.string().min(2),
  price: z
    .string()
    .regex(/^[0-9]{6}$/)
    .transform(value => Number(value)),
  category: z.string().min(2),
});

type TrainingFormData = z.infer<typeof TrainingFormSchema>;

const CreateTrainingForm = () => {
  const {
    reset,
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<TrainingFormData>({
    resolver: zodResolver(TrainingFormSchema),
    mode: "onBlur",
  });

  const onSubmit = async (data: TrainingFormData) => {
    await axiosPublic.post("/trainings", data);
    reset();
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
        <Button sx={{ mt: "0.5rem" }} fullWidth variant="contained" type="submit">
          Create Course
        </Button>
      </form>
    </GridContainer>
  );
};

export default CreateTrainingForm;
