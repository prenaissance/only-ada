import GridContainer from "@components/ui/GridContainer";
import FileUpload from "@features/upload/components/FileUpload";

type Props = {};

const Upload = (props: Props) => {
  return (
    <GridContainer>
      <FileUpload />
    </GridContainer>
  );
};

export default Upload;
