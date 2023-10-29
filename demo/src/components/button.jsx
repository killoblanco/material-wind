export const Buttons = () => (
  <section className="flex flex-col gap-8">
    <div>
      <h3 className="typo headline">
        Buttons
      </h3>
      <hr className="divider" />
    </div>
    <section className="inline-flex justify-between items-center">
      <button type="button" className="btn xs">Button XS</button>
      <button type="button" className="btn sm">Button SM</button>
      <button type="button" className="btn">Button</button>
      <button type="button" className="btn lg">Button LG</button>
      <button type="button" className="btn xl">Button XL</button>
    </section>
    <section className="inline-flex justify-between items-center">
      <button type="button" className="btn">Default</button>
      <button type="button" className="btn neutralVariant">Neutral Variant</button>
      <button type="button" className="btn primary">Primary</button>
      <button type="button" className="btn secondary">Secondary</button>
      <button type="button" className="btn tertiary">Tertiary</button>
      <button type="button" className="btn error">Error</button>
    </section>
    <section className="inline-flex justify-between items-center">
      <button type="button" className="btn elevated">Elevated</button>
      <button type="button" className="btn elevated neutralVariant">Neutral Variant</button>
      <button type="button" className="btn elevated primary">Primary</button>
      <button type="button" className="btn elevated secondary">Secondary</button>
      <button type="button" className="btn elevated tertiary">Tertiary</button>
      <button type="button" className="btn elevated error">Error</button>
    </section>
    <section className="inline-flex justify-between items-center">
      <button type="button" disabled className="btn">Disabled</button>
      <button type="button" disabled className="btn neutralVariant">Neutral Variant</button>
      <button type="button" disabled className="btn primary">Primary</button>
      <button type="button" disabled className="btn secondary">Secondary</button>
      <button type="button" disabled className="btn tertiary">Tertiary</button>
      <button type="button" disabled className="btn error">Error</button>
    </section>
    <section className="inline-flex justify-between items-center">
      <button type="button" className="btn tonal">Tonal</button>
      <button type="button" className="btn tonal neutralVariant">Neutral Variant</button>
      <button type="button" className="btn tonal primary">Primary</button>
      <button type="button" className="btn tonal secondary">Secondary</button>
      <button type="button" className="btn tonal tertiary">Tertiary</button>
      <button type="button" className="btn tonal error">Error</button>
    </section>
    <section className="inline-flex justify-between items-center">
      <button type="button" className="btn outlined">Outlined</button>
      <button type="button" className="btn outlined neutralVariant">Neutral Variant</button>
      <button type="button" className="btn outlined primary">Primary</button>
      <button type="button" className="btn outlined secondary">Secondary</button>
      <button type="button" className="btn outlined tertiary">Tertiary</button>
      <button type="button" className="btn outlined error">Error</button>
    </section>
    <section className="inline-flex justify-between items-center">
      <button type="button" className="btn text">Text</button>
      <button type="button" className="btn text neutralVariant">Neutral Variant</button>
      <button type="button" className="btn text primary">Primary</button>
      <button type="button" className="btn text secondary">Secondary</button>
      <button type="button" className="btn text tertiary">Tertiary</button>
      <button type="button" className="btn text error">Error</button>
    </section>
  </section>
)
