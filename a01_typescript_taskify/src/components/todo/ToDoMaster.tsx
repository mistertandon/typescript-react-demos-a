import React, { useReducer, useState } from "react";
import { ToDoT, ToDoMasterProp } from "./model";
import { toDoAction } from "./ToDo.reducer";
import ToDoView from "./ToDoView";

const actionStateInit = {
  view: true,
  edit: false,
  delete: false,
  create: false,
};

const ToDoMaster: React.FC<ToDoMasterProp> = ({
  item,
  iscompleted,
  toDoUpdateStatus,
}: ToDoMasterProp) => {
  const [action, setAction] = useReducer(toDoAction, actionStateInit);

  return (
    <div className="todo--container">
      <ToDoView
        item={item}
        toDoUpdateStatus={toDoUpdateStatus}
        iscompleted={iscompleted}
      />
    </div>
  );
};

export default ToDoMaster;