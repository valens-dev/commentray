import "./styles.scss";
import {
  Dialog,
  DialogTitle,
  DialogContent,
  DialogActions,
  Button,
  IconButton,
  Chip,
  FormControlLabel,
  Checkbox,
} from "@mui/material";
import { FC, useState } from "react";
import { Filter, FiltersDialogProps } from "../../data/interfaces";
import { useFilters } from "../../contexts/FilterContext";
import closeButton from "@assets/close-button.svg";
import streamCategories from "../../data/streamCategories";
import streamTypes from "../../data/streamTypes";
import streamSorts from "../../data/streamSorts";
import AddRoundedIcon from "@mui/icons-material/AddRounded";
import CheckRoundedIcon from "@mui/icons-material/CheckRounded";

const FiltersDialog: FC<FiltersDialogProps> = ({ open, onClose }) => {
  const { setFilters } = useFilters();
  const [allFilters, setAllFilters] = useState<Filter[]>(
    streamCategories as Filter[]
  );
  const [allTypeFilters, setAllTypeFilters] = useState<Filter[]>(
    streamTypes as Filter[]
  );
  const [allSortFilters, setAllSortFilters] = useState<Filter[]>(
    streamSorts as Filter[]
  );
  const [checkboxActive, setCheckboxActive] = useState(false);

  const toggleCheckboxFilter = () => {
    setCheckboxActive((oldState) => !oldState);
  };

  const chipClicked = (
    filter: Filter,
    filterArray: Filter[],
    setFilterArray: Function
  ) => {
    const updatedFilters = filterArray.map((f) =>
      f.id === filter.id ? { ...f, isActive: !f.isActive } : f
    );
    setFilterArray(updatedFilters);
  };

  const applyFilters = () => {
    const activeFilters = (filterArray: Filter[]) =>
      filterArray.filter((filter) => filter.isActive);
    const mergedFilters = [
      ...activeFilters(allFilters),
      ...activeFilters(allTypeFilters),
      ...activeFilters(allSortFilters),
    ];
    setFilters(mergedFilters);
    onClose();

    console.log("merged filters: ", mergedFilters);
  };

  const lastElementIndex = !!allTypeFilters.length
    ? allTypeFilters.length - 1
    : 0;

  return (
    <Dialog className="filters-dialog" open={open} onClose={onClose}>
      <DialogTitle>
        <div className="title-wrapper">
          <div className="title-inner-wrapper">
            <div className="dialog-title">Filters</div>
            <IconButton onClick={onClose}>
              <img src={closeButton} alt="close button" />
            </IconButton>
          </div>
        </div>
      </DialogTitle>
      <DialogTitle>Sports type:</DialogTitle>
      <DialogContent>
        {allFilters.map((filter) => (
          <Chip
            key={filter.id}
            className={`filter-chip ${filter.isActive ? "active" : ""}`}
            label={filter.name}
            onClick={() => chipClicked(filter, allFilters, setAllFilters)}
            onDelete={() => {}}
            deleteIcon={
              filter.isActive ? <CheckRoundedIcon /> : <AddRoundedIcon />
            }
          />
        ))}
      </DialogContent>
      <DialogTitle>Type:</DialogTitle>
      <DialogContent>
        {allTypeFilters.slice(0, lastElementIndex).map((filter) => (
          <Chip
            key={filter.id}
            className={`filter-chip ${filter.isActive ? "active" : ""}`}
            label={filter.name}
            onClick={() =>
              chipClicked(filter, allTypeFilters, setAllTypeFilters)
            }
            onDelete={() => {}}
            deleteIcon={
              filter.isActive ? <CheckRoundedIcon /> : <AddRoundedIcon />
            }
          />
        ))}
        <br />
        {!!allTypeFilters.length && (
          <FormControlLabel
            className="filter-checkbox"
            control={
              <Checkbox
                checked={checkboxActive}
                onChange={toggleCheckboxFilter}
              />
            }
            label={allTypeFilters[lastElementIndex].name}
          />
        )}
      </DialogContent>
      <DialogTitle>Sort by:</DialogTitle>
      <DialogContent>
        {allSortFilters.map((filter) => (
          <Chip
            key={filter.id}
            className={`filter-chip ${filter.isActive ? "active" : ""}`}
            label={filter.name}
            onClick={() =>
              chipClicked(filter, allSortFilters, setAllSortFilters)
            }
            onDelete={() => {}}
            deleteIcon={
              filter.isActive ? <CheckRoundedIcon /> : <AddRoundedIcon />
            }
          />
        ))}
      </DialogContent>
      <DialogActions>
        <Button onClick={applyFilters} variant="contained">
          Apply Filters
        </Button>
      </DialogActions>
    </Dialog>
  );
};

export default FiltersDialog;
