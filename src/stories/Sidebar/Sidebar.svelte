<script>
  import "./sidebar.css";

  /**
   * @type {string} Sidebar contents
   */
  export let label;

</script>

<navigation id="jumpBar" class="sk-jumpbar" role="navigation">
  <!-- sk-jumpbar Sidebar -->
  <nav id="navigation" class="sk-jumpbar-nav">
    <div class="hamburger-menu">
      <span
        class="hamburger-menu-open glyphicon glyphicon-menu-hamburger"
        aria-hidden="true"
        role="presentation"
      />
      <span
        class="hamburger-menu-close sk-icon sk-icon-cross display-none"
        aria-hidden="true"
        role="presentation"
      />
    </div>
    <ul class="sk-jumpbar-top">
      <li class="sk-jumpbar-item active">
        <a id="home" href="/web/guest/home" aria-label="View Log In Page">
          <span
            aria-hidden="true"
            class="sk-jumpbar-item-icon sk-icon sk-icon-key"
          /> <span class="sk-jumpbar-item-text">{label}</span>
        </a>
      </li>
      <li class="sk-jumpbar-item">
        <a
          id="register"
          href="/web/guest/register"
          aria-label="View Register Page"
        >
          <span
            aria-hidden="true"
            class="sk-jumpbar-item-icon sk-icon sk-icon-user"
          /> <span class="sk-jumpbar-item-text">Register</span>
        </a>
      </li>
    </ul>
  </nav>
</navigation>
