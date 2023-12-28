import { FunctionComponent } from "react";
import { Service } from "../types";

const ServiceCard: FunctionComponent<{ service: Service }> = ({ service }) => {
  const { Icon, title, about } = service;

  return (
    <div className="col-span-2 p-3 bg-gray-200 rounded-lg dark:bg-dark-200 md:col-span-1">
      <Icon className="w-12 h-12 mb-4 text-gray-800 dark:text-gray-200" />
      <h2 className="mb-3 text-lg font-medium text-gray-800 dark:text-gray-100">
        {title}
      </h2>
      <p className="text-gray-600 dark:text-gray-300">{about}</p>
    </div>
  );
};

export default ServiceCard;
