import { useForm } from "react-hook-form";
import { ITask } from "../entity/task";

export const NewTaskForm = () => {
    const { register, handleSubmit, reset } = useForm<ITask>();

    const onSubmit = async (data: ITask) => {
        console.log(data);
        reset();
    };

    return (
        <form onSubmit={handleSubmit(onSubmit)}>
            <div className="row">
                <div className="col-md-4">
                    <div className="my-3">
                        <h4>Task Title</h4>
                        <input
                            {...register("text")}
                            type="text"
                            className="form-control"
                            placeholder="task contents"
                        />
                    </div>
                    <button
                        className="btn btn-primary btn-lg btn-block"
                        type="submit"
                    >
                        Add
                    </button>
                </div>
            </div>
        </form>
    );
};
