export const Dividers = () => (
  <section className="flex flex-col gap-8">
    <div>
      <h3 className="typo headline">
        Dividers
      </h3>
      <hr className="divider" />
    </div>
    <section className="flex flex-col gap-4">
      <hr className="divider" />
      <hr className="divider primary" />
      <hr className="divider secondary" />
      <hr className="divider tertiary" />
      <hr className="divider error" />
    </section>
    <section className="flex flex-row justify-between h-8">
      <hr className="divider vertical" />
      <hr className="divider vertical primary" />
      <hr className="divider vertical secondary" />
      <hr className="divider vertical tertiary" />
      <hr className="divider vertical error" />
    </section>
  </section>
)
