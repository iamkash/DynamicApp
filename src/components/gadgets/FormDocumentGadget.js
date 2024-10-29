import React, { useState, useRef } from 'react';
import { getWidgetComponent } from '../widgets/WidgetRegistry';
import * as FaIcons from 'react-icons/fa';

const FormDocumentGadget = ({ gadget }) => {
  const { sections = [], footer = { buttons: [] } } = gadget.gadgetOptions || gadget;

  const sectionRefs = useRef({});
  const [activeSection, setActiveSection] = useState(sections[0]?.sectionId);
  const iconColors = ['bg-red-500', 'bg-blue-500', 'bg-green-500', 'bg-yellow-500', 'bg-purple-500'];

  const scrollToSection = (sectionId) => {
    setActiveSection(sectionId);
  };

  const handleButtonAction = (action) => {
    console.log(`${action} action triggered`);
  };

  return (
    <div className=" gap-2 form-gadget flex flex-col" style={{ height: 'calc(100vh - 100px)' }}>
      {/* Main content area excluding footer */}
      <div className="gap-2 flex flex-grow overflow-hidden">
        {/* Left Navigation Panel */}
        <nav className="left-nav-panel w-1/4 p-4 border-r text-sm flex flex-col overflow-y-auto" style={{ backgroundColor: 'var(--tertiaryBackground)', borderColor: 'var(--secondaryBackground)', color: 'var(--primaryTextColor)' }}>
          <ul className=" mb-6">
            {sections.map((section, index) => {
              const IconComponent = FaIcons[section.icon] || FaIcons.FaFolder;
              const iconColorClass = iconColors[index % iconColors.length];

              return (
                <div key={section.sectionId}>
                  <li
                    className={` text-xs flex items-center justify-between py-2 px-2 hover:bg-gray-100 cursor-pointer ${activeSection === section.sectionId ? 'bg-gray-800' : ''}`}
                    onClick={() => scrollToSection(section.sectionId)}
                    style={{
                      backgroundColor: activeSection === section.sectionId ? 'var(--secondaryBackground)' : 'transparent',
                      color: 'var(--primaryTextColor)',
                    }}
                  >
                    <div className="flex items-center">
                      <div className={`w-8 h-8 flex items-center justify-center rounded-full ${iconColorClass} text-white mr-3`}>
                        <IconComponent className="text-sm" />
                      </div>
                      <span>{section.title}</span>
                    </div>
                    {section.count !== undefined && (
                      <span className="border px-2 py-1 rounded-md" style={{ borderColor: 'var(--secondaryBackground)', color: 'var(--secondaryTextColor)' }}>
                        {section.count}
                      </span>
                    )}
                  </li>
                  {index < sections.length - 1 && <hr className="my-2" style={{ borderColor: 'var(--secondaryBackground)' }} />}
                </div>
              );
            })}
          </ul>
        </nav>

        {/* Main Form Content Area */}
        <div className=" p-2 w-3/4 flex flex-col overflow-y-auto" style={{ backgroundColor: 'var(--tertiaryBackground)', borderColor: 'var(--secondaryBackground)', color: 'var(--primaryTextColor)' }}>
          {sections.map((section) => (
            <div
              key={section.sectionId}
              ref={(el) => (sectionRefs.current[section.sectionId] = el)}
              className={`${activeSection === section.sectionId ? 'block' : 'hidden'} w-full p-2`}
            >
             <div>
  <h2 className="text-xs font-bold mb-2">{section.title}</h2>
  {Array.isArray(section.groups) &&
    section.groups.map((group) => (
      <div key={group.groupId} className="mb-2 space-y-2 grid grid-cols-12 gap-4">
        {Array.isArray(group.fields) &&
          group.fields.map((field, index) => {
            const WidgetComponent = getWidgetComponent(field.type);
            return WidgetComponent ? (
              <div key={index} className={`col-span-${field.colSpan || 12}`}>
                <WidgetComponent {...field} />
              </div>
            ) : null;
          })}
      </div>
    ))}
</div>
            </div>
          ))}
        </div>
      </div>

      {/* Footer that spans across both nav and content */}
      <div className="footer w-full p-2 border-t flex justify-end space-x-2" style={{ backgroundColor: 'var(--tertiaryBackground)', borderColor: 'var(--secondaryBackground)' }}>
        {footer.buttons.map((button, index) => (
          <button
            key={index}
            type="button"
            className={`btn ${button.action === 'save' ? 'bg-blue-500' : 'bg-gray-300'} text-white text-sm px-2 py-2 rounded`}
            onClick={() => handleButtonAction(button.action)}
          >
            {button.label}
          </button>
        ))}
      </div>
    </div>
  );
};

export default FormDocumentGadget;
