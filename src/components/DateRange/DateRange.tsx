import {
  Button,
  ClickAwayListener,
  IconButton,
  Popper,
} from "@material-ui/core";
import { Delete } from "@material-ui/icons";
import moment from "moment";
import React, { ReactElement, useState } from "react";
import { DateRangePicker } from "react-date-range";
import "react-date-range/dist/styles.css"; // main css file
import "react-date-range/dist/theme/default.css"; // theme css file

type Range = {
  startDate: Date;
  endDate: Date;
  key: "selection";
};

const DEFAULT_RANGE: Range = {
  startDate: moment().startOf("isoWeek").toDate(),
  endDate: moment().endOf("isoWeek").toDate(),
  key: "selection",
};

export const DateRange = (): ReactElement => {
  const [dateRangePickerActivated, setDateRangePickerActivated] =
    useState<boolean>(false);
  const [dateRange, setDateRange] = useState<Range>(DEFAULT_RANGE);
  const [anchorEl, setAnchorEl] = useState<HTMLButtonElement | null>(null);

  const onOpenModal = (
    event: React.MouseEvent<HTMLButtonElement, MouseEvent>
  ): void => {
    setDateRangePickerActivated(true);
    setAnchorEl(event.currentTarget);
    // setDateRange({
    //   // startDate: new Date(props.filter.dateFrom!),
    //   // endDate: new Date(props.filter.dateTo!),
    //   key: "selection",
    // });
  };

  const onClose = (): void => {
    setDateRangePickerActivated(false);
  };

  return (
    <>
      <Button onClick={onOpenModal} id="btn-range" className="ml-6">
        {moment().add(-1, "days").format("D. M. YYYY")}
        {" - "}
        {moment().format("D. M. YYYY")}
      </Button>

      <IconButton id="reset">
        <Delete />
      </IconButton>

      <Popper
        open={dateRangePickerActivated}
        anchorEl={anchorEl}
        placement="top-start"
      >
        <ClickAwayListener onClickAway={onClose}>
          <div id="range-picker">
            <DateRangePicker
              onChange={(item) => setDateRange(item.selection as Range)}
              showPreview
              moveRangeOnFirstSelection={false}
              months={2}
              ranges={[dateRange]}
              direction="horizontal"
            />
            <div className="flex justify-end">
              <Button id="btn-cancel" color="default" onClick={onClose}>
                Cancel
              </Button>
              <Button id="btn-apply" color="primary">
                Apply
              </Button>
            </div>
          </div>
        </ClickAwayListener>
      </Popper>
    </>
  );
};
