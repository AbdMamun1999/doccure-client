import { Tooltip, Typography } from "@material-tailwind/react";
import { InformationCircleIcon } from "@heroicons/react/24/outline";

export default function ToolTipUi({ para, Icon, title }) {
  return (
    <Tooltip
      className="border border-red-500"
      content={
        <div className="w-80">
          <Typography color="white" className="font-medium">
            {title}
          </Typography>
          <Typography
            variant="small"
            color="white"
            className="font-normal opacity-80"
          >
            {para}
          </Typography>
        </div>
      }
    >
      <Typography variant="small" className=" flex gap-1 items-center">
        <Icon />
        {para.slice(0, 26) + "..."}
      </Typography>
    </Tooltip>
  );
}
