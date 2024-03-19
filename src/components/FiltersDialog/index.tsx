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

import "./styles.scss";
import closeButton from "@assets/close-button.svg";
import categories from "../../data/categories";
import types from "../../data/types";
import sorts from "../../data/sorts";
import AddRoundedIcon from "@mui/icons-material/AddRounded";
import CheckRoundedIcon from "@mui/icons-material/CheckRounded";
import { Category } from "../../data/interfaces";
import { useFilters } from "../../contexts/FilterContext";

interface FiltersDialogProps {
  open: boolean;
  onClose: () => void;
}

interface Filter extends Category {
  isActive: boolean;
}

const FiltersDialog: FC<FiltersDialogProps> = ({ open, onClose }) => {
  const { setFilters } = useFilters();
  const [allFilters, setAllFilters] = useState<Filter[]>(
    categories as Filter[]
  );
  const [allTypeFilters, setAllTypeFilters] = useState<Filter[]>(
    types as Filter[]
  );
  const [allSortFilters, setAllSortFilters] = useState<Filter[]>(
    sorts as Filter[]
  );
  const [checkboxActive, setCheckboxActive] = useState(false);

  const toggleCheckboxFilter = () => {
    setCheckboxActive((oldState) => !oldState);
  };

  const chipClicked = (filter: Filter) => {
    filter.isActive = !filter.isActive;
    const newFilters = [...allFilters];
    const newTypeFilters = [...allTypeFilters];
    const newSortFilters = [...allSortFilters];
    setAllFilters(newFilters);
    setAllTypeFilters(newTypeFilters);
    setAllSortFilters(newSortFilters);
  };

  const applyFilters = () => {
    const activeCategories = allFilters.filter((filter) => filter.isActive);
    const activeTypes = allTypeFilters.filter((filter) => filter.isActive);
    const activeSorts = allSortFilters.filter((filter) => filter.isActive);
    setFilters(activeCategories);
    setAllTypeFilters(activeTypes);
    setAllSortFilters(activeSorts);
    onClose();
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
            onClick={() => chipClicked(filter)}
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
            onClick={() => chipClicked(filter)}
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
            onClick={() => chipClicked(filter)}
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
