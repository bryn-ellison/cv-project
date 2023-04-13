export const Preview = ({ general, education }) => {
  return (
    <div>
      <section>
        <h2>
          {general.firstName} {general.secondName}
        </h2>
        <h3>{general.email}</h3>
        <h3>{general.phone}</h3>
      </section>
      <section>
        <h2>Education</h2>
        {education.map((item, i) => (
          <div key={i}>
            <h3>{item.courseTitle}</h3>
            <h4>{item.institutionName}</h4>
            <p>
              {item.startDate} to {item.endDate}
            </p>
            <p>{item.description}</p>
          </div>
        ))}
      </section>
    </div>
  );
};
