import type { TaskFilterProps } from "../../types";
import { useState , useEffect } from "react";

const FilterBar = ({tasks , onChange}: TaskFilterProps) => {
    const [statusFilter, setStatusFilter] = useState<string>('all-status');
    const [priorityFilter, setPriorityFilter] = useState<string>('all-priorities');
    const [sortOrder, setSortOrder] = useState<string>('');
    

   useEffect(() => {
    let filtered = tasks;

    if (statusFilter !== "all-status") {
      filtered = filtered.filter(t => t.status === statusFilter);
    }

    if (priorityFilter !== "all-priorities") {
      filtered = filtered.filter(t => t.priority === priorityFilter);
    }

    if (sortOrder === "sort-asc") {
        filtered.sort(
            (a, b) =>
                new Date(a.dueDate).getTime() - new Date(b.dueDate).getTime()
        )
    }

    if (sortOrder === "sort-desc") {
        filtered.sort(
            (a, b) =>
                new Date(b.dueDate).getTime() - new Date(a.dueDate).getTime()
    )   
    }   
    onChange(filtered);
  }, [statusFilter, priorityFilter, tasks , sortOrder]);
      
    return (
        <div className="filter__bar--container">
            <div className="filter__bar">
                <div className="filter--container">
                    <label className="filter__bar--label">Status</label>
                    
                    <select className="curr--dropdown" id="current-status" defaultValue={"all-status"} onChange={(e) => setStatusFilter(e.target.value)}>
                        <option value="all-status">All Statuses</option>
                        <option value="pending">Pending</option>
                        <option value="in-progress">In Progress</option>
                        <option value="completed">Completed</option>
                    </select>
                </div>
                <div className="filter--container">
                    <label className="filter__bar--label">Priority</label>
                
                    <select className="curr--dropdown" id="current-priority" defaultValue={"all-priorities"} onChange={(e) => setPriorityFilter(e.target.value)}>
                        <option value="all-priorities">All Priorities</option>
                        <option value="high">High</option>
                        <option value="medium">Medium</option>
                        <option value="low">Low</option>
                    </select>
                </div>
            </div>
            <div className="filter__bar">
                <div className="filter__bar--notification"></div>
                <div className="filter--container">
                    <label className="filter__bar--label">Sort</label>
                
                    <select className="curr--dropdown" id="current-sort" defaultValue={" "} onChange={(e) => setSortOrder(e.target.value)}>
                        <option value="sort-asc">Due Date Ascending</option>
                        <option value="sort-desc">Due Date Descending</option>
                       
                    </select>
                </div>
            </div>
        </div>
    );
}

export default FilterBar;
