import classes from "./AboutUs.module.css";

const AboutUsPage = () => {
  return (
    <div className={classes.container}>
      <section className={classes.letter}>
        <h1>Who are we?</h1>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam metus
          nisl, pharetra commodo bibendum at, vulputate vitae sapien. Ut
          convallis lorem eu lacus sollicitudin pulvinar. Fusce non augue lorem.
          Nunc pulvinar metus ac justo ullamcorper, a dapibus mauris consequat.
          Aenean efficitur ornare pellentesque. Proin dolor leo, vulputate nec
          tincidunt non, feugiat non sem. Vestibulum ac mi vitae lacus
          vestibulum ultricies. Sed dictum dapibus urna eget hendrerit. Sed id
          condimentum massa, vitae euismod lacus. Sed volutpat non dolor et
          mattis. Aenean semper magna in faucibus dapibus. Quisque quis bibendum
          lectus. Nulla in nunc eu erat facilisis scelerisque vestibulum non mi.
          Fusce at justo facilisis, sollicitudin neque quis, blandit ex.
          Maecenas viverra, nisi at imperdiet gravida, risus purus semper arcu,
          ut sollicitudin turpis orci scelerisque sapien. In elit nulla,
          fringilla eget aliquam a, porttitor at ligula. Pellentesque vitae
          sollicitudin ante, sed mollis turpis. Class aptent taciti sociosqu ad
          litora torquent per conubia nostra, per inceptos himenaeos. Quisque
          porta neque a suscipit elementum. Fusce orci arcu, auctor nec
          venenatis posuere, congue nec metus. Donec sit amet tempor ex, eget
          dictum erat. In non justo cursus lorem ultrices lobortis. Etiam
          ultricies id lorem in luctus. In ac nunc eu orci tempor pellentesque
          ut quis urna. Nullam dictum pharetra ipsum, sit amet hendrerit ligula.
          Quisque faucibus, ipsum quis luctus eleifend, libero odio aliquam
          augue, et gravida felis turpis non tellus.
        </p>
      </section>
      <section className={classes.about_us}>
        <section className={classes.story}>
          <h1>Short story</h1>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean
            semper justo est. Mauris congue nulla blandit nisl feugiat molestie.
            Fusce augue ipsum, pharetra sed mi ac, sagittis pretium quam. Nam at
            laoreet turpis. Suspendisse ullamcorper auctor tempor. Curabitur sit
            amet magna sapien. Nulla porttitor lacus non sapien condimentum
            iaculis. Praesent porta libero nulla, in luctus ipsum lobortis quis.
            Curabitur et tortor sem. Maecenas vestibulum in tellus vel
            fringilla. Nullam cursus porttitor urna, ac auctor enim molestie a.
            Curabitur nec lorem nisl. Vestibulum finibus, odio sit amet
            venenatis dictum, augue ipsum imperdiet metus, id euismod metus
            nulla et est.
          </p>
        </section>
        <section className={classes.members}>
        </section>
      </section>
    </div>
  );
};
export default AboutUsPage;
