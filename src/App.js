import './App.css';
import Family from './contextComponent/Family';
import { FamilyContext } from './contextComponent/FamilyContext';
// import Family from './prop_drill/Family';

function App() {
  const familyInfo = {
    familyName : "The Griffins",
    onlyForParents:()=>{
      return "Info for parents"
    },
    onlyForChild:()=>{
      return "Info for child"
    },
    onlyForGrandChildren:()=>{
      return "Info for grandchildren"
    }
  }
  return (
    // <Family info={familyInfo}/>
    <FamilyContext.Provider value={familyInfo}>
      <Family />
    </FamilyContext.Provider>
  );
}

export default App;
