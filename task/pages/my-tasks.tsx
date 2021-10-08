import { useState } from "react";
import { ContentWrapper, Tasks, RenderCreateTaskForm } from "components";

const MyTasks = (): React.ReactElement => {
  const [isRefreshing, setRefreshing] = useState<boolean>(true);
  const [isLoading, setLoading] = useState<boolean>(false);
  const [isVisibile, setIsVisibile] = useState(false);

  const closeModal = () => {
    setIsVisibile(false);
  };

  return (
    <ContentWrapper header footer>
      <RenderCreateTaskForm
        setLoading={setLoading}
        isLoading={isLoading}
        isVisibile={isVisibile}
        setIsVisibile={setIsVisibile}
        setRefreshing={setRefreshing}
        closeModal={closeModal}
      />
      <Tasks isRefreshing={isRefreshing} setRefreshing={setRefreshing} />
    </ContentWrapper>
  );
};

export default MyTasks;
