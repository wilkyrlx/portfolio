
// TODO: update

const language = '#3178c6'
const framework = '#61DAFB'
const ai = '#306998'
const service = '#4DB33D'       // for example, AWS, Firesbase, MongoDB
const other = '#00599C'

export const skills = [
  { name: 'C++', color: language },
  { name: 'Python', color: language },
  { name: 'TypeScript', color: language },
  { name: 'Kotlin', color: language },
  { name: 'Go', color: language },
  { name: 'Java', color: language },
  { name: 'MongoDB', color: service },
  { name: 'Firebase', color: service },
  { name: 'React', color: framework },
  { name: 'Node.js', color: framework },
  { name: 'Android Studio', color: framework },
  { name: 'ROS', color: framework },
  { name: 'OpenCV', color: ai },
  { name: 'TensorFlow', color: ai },
  { name: 'Git', color: other },
];

const extended = [...skills, 
  { name: 'NumPy', color: ai },
  { name: 'Pandas', color: ai },
  { name: 'Scikit-learn', color: ai },
  { name: 'Matplotlib', color: ai },
];

export const skillsByName = Object.fromEntries(extended.map(skill => [skill.name, skill]));
