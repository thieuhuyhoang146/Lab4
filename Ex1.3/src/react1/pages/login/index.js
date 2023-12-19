import style from "./login.module.scss"

const Login = () => {
  return (
    <div className="login-page">
      <div class="tile">
        <div class="tile-header">
          <h2
            style={{
              color: "white",
              opacity: 0.75,
              fontSize: "4rem",
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              height: "100%",
            }}
          >
            SIGN IN
          </h2>
        </div>

        <div class="tile-body">
          <form id="form">
            <label class="form-input">
              <i class="material-icons">person</i>
              <input type="text" autofocus="true" required />
              <span class="label">Username</span>
              <span class="underline"></span>
            </label>

            <label class="form-input">
              <i class="material-icons">lock</i>
              <input type="password" required />
              <span class="label">Password</span>
              <div class="underline"></div>
            </label>

            <div
              class="submit-container clearfix"
              style={{ marginTop: "2rem" }}
            >
              <div
                id="submit"
                role="button"
                type="button"
                class="btn btn-irenic float-right"
                tabindex="0"
              >
                <span>SIGN IN</span>
              </div>

              <div class="login-pending">
                <div class="spinner">
                  <span class="dot1"></span>
                  <span class="dot2"></span>
                </div>

                <div class="login-granted-content">
                  <i class="material-icons">done</i>
                </div>
              </div>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Login;
