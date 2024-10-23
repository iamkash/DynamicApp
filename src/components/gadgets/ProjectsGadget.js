import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import * as FaIcons from 'react-icons/fa';
import { FaStar,FaCheckCircle, FaPlus, FaArchive, FaTrash, FaClone, FaShareAlt, FaCheck, FaCalendarAlt, FaClock, FaUser } from 'react-icons/fa';


// Example of enhanced project data (10 projects)
const projectData = [
    {
      projectId: 'RE-001',
      projectName: 'Reservoir Simulation Optimization',
      projectDescription: 'Optimizing reservoir simulation models to improve oil recovery and performance predictions.',
      projectOwner: 'John Doe',
      createdOn: '2024-01-15',
      lastModified: '2024-02-01',
      status: 'Active', // Active, Completed, Archived
      isFavorite: true,
    },
    {
      projectId: 'RE-002',
      projectName: 'Pressure Testing Analysis',
      projectDescription: 'Analyzing pressure tests to evaluate reservoir permeability and wellbore integrity.',
      projectOwner: 'Jane Smith',
      createdOn: '2024-01-10',
      lastModified: '2024-01-20',
      status: 'Completed',
      isFavorite: false,
    },
    {
      projectId: 'RE-003',
      projectName: 'Fluid Flow Modeling',
      projectDescription: 'Modeling fluid flow through porous media using reservoir simulation software for enhanced oil recovery (EOR) strategies.',
      projectOwner: 'John Doe',
      createdOn: '2024-01-05',
      lastModified: '2024-01-18',
      status: 'Active',
      isFavorite: true,
    },
    {
      projectId: 'RE-004',
      projectName: 'Fracture Mapping and Analysis',
      projectDescription: 'Mapping and analyzing fractures in the reservoir to improve well placement and production efficiency.',
      projectOwner: 'Alice Brown',
      createdOn: '2024-01-03',
      lastModified: '2024-01-12',
      status: 'Archived',
      isFavorite: false,
    },
    {
      projectId: 'RE-005',
      projectName: 'Reservoir Pressure Monitoring',
      projectDescription: 'Monitoring and analyzing reservoir pressure data to optimize production rates and prevent reservoir damage.',
      projectOwner: 'Jane Smith',
      createdOn: '2024-01-20',
      lastModified: '2024-01-25',
      status: 'Active',
      isFavorite: true,
    },
    {
      projectId: 'RE-006',
      projectName: 'Thermal Recovery Study',
      projectDescription: 'Evaluating the effectiveness of thermal recovery techniques, such as steam injection, to increase oil extraction.',
      projectOwner: 'John Doe',
      createdOn: '2024-01-25',
      lastModified: '2024-01-29',
      status: 'Active',
      isFavorite: false,
    },
    {
      projectId: 'RE-007',
      projectName: 'Waterflood Optimization',
      projectDescription: 'Optimizing waterflooding operations to enhance oil recovery in mature reservoirs.',
      projectOwner: 'Alice Brown',
      createdOn: '2024-01-10',
      lastModified: '2024-01-23',
      status: 'Completed',
      isFavorite: true,
    },
    {
      projectId: 'RE-008',
      projectName: 'PVT Analysis for Reservoir Fluids',
      projectDescription: 'Conducting PVT (Pressure-Volume-Temperature) analysis of reservoir fluids to understand fluid behavior under different reservoir conditions.',
      projectOwner: 'Jane Smith',
      createdOn: '2024-01-28',
      lastModified: '2024-02-02',
      status: 'Active',
      isFavorite: false,
    },
    {
      projectId: 'RE-009',
      projectName: 'Gas Injection Feasibility Study',
      projectDescription: 'Assessing the feasibility of gas injection (CO2, N2) to maintain reservoir pressure and improve oil recovery.',
      projectOwner: 'John Doe',
      createdOn: '2024-01-12',
      lastModified: '2024-01-25',
      status: 'Archived',
      isFavorite: false,
    },
    {
      projectId: 'RE-010',
      projectName: 'Reservoir Characterization and Mapping',
      projectDescription: 'Developing detailed reservoir characterization and geological maps to optimize wellbore placement and predict production potential.',
      projectOwner: 'Alice Brown',
      createdOn: '2024-01-18',
      lastModified: '2024-01-30',
      status: 'Active',
      isFavorite: true,
    }
  ];
  

// Search panel items
const searchPanelItems = [
  { icon: 'FaFolder', name: 'All Projects' },
  { icon: 'FaTasks', name: 'Active' },
  { icon: 'FaStar', name: 'Favorites' },
  { icon: 'FaProjectDiagram', name: 'My Projects' },
  { icon: 'FaShareAlt', name: 'Shared' },
  { icon: 'FaCheck', name: 'Completed' },
  { icon: 'FaTasks', name: 'Archived' },
];

const currentUser = 'John Doe'; // Simulating the current user



const ProjectsGadget = ({ resultsPanel }) => {
  // State for filtering
  const [selectedFilter, setSelectedFilter] = useState('All Projects');
  const [searchText, setSearchText] = useState(''); // State to store the search text
 

// Filter counts dynamically calculated based on project data and user status
const calculateCounts = (projects) => {
    return {
      allProjects: projects.length,
      active: projects.filter(project => project.status === 'Active').length,
      favorites: projects.filter(project => project.isFavorite).length,
      myProjects: projects.filter(project => project.projectOwner === currentUser).length, // Only projects where the user is the owner
      shared: projects.filter(project => project.projectOwner !== currentUser).length, // Projects not owned by the current user
      completed: projects.filter(project => project.status === 'Completed').length,
      archived: projects.filter(project => project.status === 'Archived').length,
    };
  };

  const projectCounts = calculateCounts(projectData);

// Handle search input and update state
const handleSearch = (event) => {
    setSearchText(event.target.value.toLowerCase());
  };

  /// Filter the projects based on the selected filter and search input
const filterProjects = () => {
    // First, filter based on the selected filter
    let filtered = projectData;
  
    switch (selectedFilter) {
      case 'Active':
        filtered = filtered.filter((project) => project.status === 'Active');
        break;
      case 'Favorites':
        filtered = filtered.filter((project) => project.isFavorite);
        break;
      case 'My Projects':
        filtered = filtered.filter((project) => project.projectOwner === currentUser);
        break;
      case 'Shared':
        filtered = filtered.filter((project) => project.projectOwner !== currentUser);
        break;
      case 'Completed':
        filtered = filtered.filter((project) => project.status === 'Completed');
        break;
      case 'Archived':
        filtered = filtered.filter((project) => project.status === 'Archived');
        break;
      default:
        filtered = projectData;
        break;
    }


    // Now, apply the search filter to the already filtered list
    if (searchText) {
      filtered = filtered.filter((project) =>
        project.projectName.toLowerCase().includes(searchText.toLowerCase()) ||
        project.projectDescription.toLowerCase().includes(searchText.toLowerCase()) ||
        project.projectOwner.toLowerCase().includes(searchText.toLowerCase()) ||
        project.createdOn.toLowerCase().includes(searchText.toLowerCase()) ||
        project.lastModified.toLowerCase().includes(searchText.toLowerCase()) ||
        project.status.toLowerCase().includes(searchText.toLowerCase())
      );
    }
  
    return filtered;
  };
  
  const filteredProjects = filterProjects(); // Apply the combined filter
  

  const iconColors = [
    'bg-red-500',
    'bg-blue-500',
    'bg-green-500',
    'bg-yellow-500',
    'bg-purple-500',
    'bg-teal-500',
    'bg-gray-500',
  ];

  return (
<div className="projects-gadget flex h-[calc(100vh-105px)] p-2 gap-2">
  {/* Search Panel */}
  <div
    className="search-panel w-1/4 p-2 border-r text-sm flex flex-col justify-between"
    style={{ backgroundColor: 'var(--tertiaryBackground)', borderColor: 'var(--secondaryBackground)', color: 'var(--primaryTextColor)' }}
  >
    <div>
      {/* Search Input Field in the Search Panel */}
      <input
        type="text"
        placeholder="Search..."
        className="w-full p-2 mb-4 border rounded-lg focus:outline-none focus:border-blue-500"
        value={searchText} // Bind the input's value to the searchText state
        onChange={handleSearch} // Handle changes to update the searchText state
        style={{ backgroundColor: 'var(--tertiaryBackground)', color: 'var(--primaryTextColor)', borderColor: 'var(--secondaryBackground)' }}
      />

      <ul className="mb-6">
        {searchPanelItems.map((item, index) => {
          const IconComponent = FaIcons[item.icon];
          const iconColorClass = iconColors[index % iconColors.length];

          let count;
          switch (item.name) {
            case 'All Projects':
              count = projectCounts.allProjects;
              break;
            case 'Active':
              count = projectCounts.active;
              break;
            case 'Favorites':
              count = projectCounts.favorites;
              break;
            case 'My Projects':
              count = projectCounts.myProjects;
              break;
            case 'Shared':
              count = projectCounts.shared;
              break;
            case 'Completed':
              count = projectCounts.completed;
              break;
            case 'Archived':
              count = projectCounts.archived;
              break;
            default:
              count = 0;
          }

          return (
            <div key={index}>
              <li
                className={`flex items-center text-xs justify-between py-2 px-2 hover:bg-gray-100 cursor-pointer ${
                  selectedFilter === item.name ? 'bg-gray-800' : ''
                }`}
                onClick={() => setSelectedFilter(item.name)}
                style={{ backgroundColor: selectedFilter === item.name ? 'var(--secondaryBackground)' : 'transparent', color: 'var(--primaryTextColor)' }}
              >
                <div className="flex items-center text-xs">
                  {IconComponent && (
                    <div
                      className={`w-8 h-8 flex items-center text-xs justify-center rounded-full ${iconColorClass} text-white mr-3`}
                    >
                      <IconComponent className="text-sm" />
                    </div>
                  )}
                  <span>{item.name}</span>
                </div>
                <span className="border px-2 py-1 rounded-md" style={{ borderColor: 'var(--secondaryBackground)', color: 'var(--secondaryTextColor)' }}>
                  {count}
                </span>
              </li>
              {index < searchPanelItems.length - 1 && <hr className="my-2" style={{ borderColor: 'var(--secondaryBackground)' }} />}
            </div>
          );
        })}
      </ul>
    </div>

    {/* Create New Project Button */}
    <button className="flex items-center text-xs justify-center w-full py-2 px-4 bg-blue-500 text-white rounded hover:bg-blue-600">
      <FaPlus className="mr-2" />
      Create a New Project
    </button>
  </div>

  {/* Results Panel */}
  <div
    className="results-panel flex-1 p-2 text-sm"
    style={{ backgroundColor: 'var(--tertiaryBackground)', color: 'var(--primaryTextColor)' }}
  >
    {/* Toolbar Button Group */}
    <div className="flex items-center text-xs justify-between mb-2">
      {/* New Project Button aligned to the left */}
      <button className="flex items-center text-xs bg-blue-500 text-white px-2 py-1 rounded hover:bg-blue-600">
        <FaPlus className="mr-2" /> New Project
      </button>

      {/* Button Group aligned to the right */}
      <div className="button-group flex space-x-2">
        <button className="flex items-center text-xs bg-gray-500 text-white px-2 py-1 rounded hover:bg-gray-600">
          <FaArchive className="mr-2" /> Archive
        </button>
        <button className="flex items-center text-xs bg-red-500 text-white px-2 py-1 rounded hover:bg-red-600">
          <FaTrash className="mr-2" /> Delete
        </button>
        <button className="flex items-center text-xs bg-yellow-500 text-white px-2 py-1 rounded hover:bg-yellow-600">
          <FaClone className="mr-2" /> Clone
        </button>
        <button className="flex items-center text-xs bg-green-500 text-white px-2 py-1 rounded hover:bg-green-600">
          <FaShareAlt className="mr-2" /> Share
        </button>
        <button className="flex items-center text-xs bg-teal-500 text-white px-2 py-1 rounded hover:bg-teal-600">
          <FaCheck className="mr-2" /> Complete
        </button>
      </div>
    </div>

    {/* Scrollable Results Panel */}
    <div className="results-list overflow-y-auto h-[calc(100vh-190px)]">
      <ul>
        {filteredProjects.map((task, index) => (
          <li key={index} className="flex justify-between py-3 border-b" style={{ borderColor: 'var(--secondaryBackground)' }}>
            {/* Left side: Checkbox and project details */}
            <div className="flex items-start">
              <input type="checkbox" className="mr-4 mt-2" /> {/* Align checkbox */}
              <div className="flex flex-col">
                {/* Row 1: Project Name */}
               

                <Link
                  to="/project-home/"
                  state={{ task }}
                  className="font-bold text-sm text-blue-500 hover:underline"
                >
                  {task.projectName}
                </Link>

                {/* Row 2: Project Description */}
                <span className="text-xs" style={{ color: 'var(--secondaryTextColor)' }}>
                  {task.projectDescription}
                </span>

                {/* Row 3: Project Owner, Created On, Last Modified */}
                <div className="flex items-center text-xs text-xs mt-1" style={{ color: 'var(--secondaryTextColor)' }}>
                  <FaUser className="mr-1" />
                  <span>{task.projectOwner}</span>
                  <FaCalendarAlt className="ml-3 mr-1" />
                  <span>{task.createdOn}</span>
                  <FaClock className="ml-3 mr-1" />
                  <span>{task.lastModified}</span>
                </div>
              </div>
            </div>

            {/* Right side: Status, Owner, Favorite, Shared Icons */}
            <div className="flex flex-col items-center space-y-2">
              {/* Status Icon */}
              <div
                className={`w-4 h-4 rounded-full flex items-center text-xs justify-center ${
                  task.status === 'Active'
                    ? 'bg-green-500'
                    : task.status === 'Completed'
                    ? 'bg-blue-500'
                    : 'bg-gray-400'
                }`}
              >
                {task.status === 'Active' ? (
                  <FaCheckCircle className="text-white" />
                ) : task.status === 'Completed' ? (
                  <FaCheckCircle className="text-white" />
                ) : (
                  <FaArchive className="text-white" />
                )}
              </div>

              {/* Owner Icon */}
              <div
                className={`w-4 h-4 rounded-full flex items-center text-xs justify-center ${
                  task.projectOwner === currentUser ? 'bg-blue-500' : 'bg-gray-300'
                }`}
              >
                <FaUser className="text-white" />
              </div>

              {/* Favorite Icon */}
              <div
                className={`w-4 h-4 rounded-full flex items-center text-xs justify-center ${
                  task.isFavorite ? 'bg-yellow-500' : 'bg-gray-300'
                }`}
              >
                <FaStar className="text-white" />
              </div>
            </div>
          </li>
        ))}
      </ul>
    </div>
  </div>
</div>

  
  );
};

export default ProjectsGadget;
