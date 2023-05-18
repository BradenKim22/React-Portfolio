import React from 'react';
// My Resume and List of Proficiencies

export default function Resume() {
    console.log('This uses the export default');
};

export function ResumeNoDefault() {
    console.log('This doesnt use the default, so when you import it .. you will need the {}');
}