const BudgetItem = ({ budget }) => {
  return (
    <>
      <p className="text-[50px]">Name</p>
      <div>{budget.name}</div>
    </>
  );
};

export default BudgetItem;
