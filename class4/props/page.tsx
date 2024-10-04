import Student from "@/components/Student";

export default function Home() {
  const name = "Anum"
  const age = 30
  const Salary = 100000

  return (
   <Student name={name} age={age } Salary={Salary} />
  );
  
}