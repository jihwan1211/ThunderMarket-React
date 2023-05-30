import { NavContent, NavBtn } from "./NavContainer";
import { useSelector, useDispatch } from "react-redux";
import { isModalClickedActions } from "../store";
import $ from "jquery";
import { useEffect } from "react";
import { KakaoLoginActions } from "../store";

const NavLogin = () => {
  const dispatch = useDispatch();

  const KakaoLoginUserNickName = useSelector((state) => state.KakaoLogin.name);

  let code = new URL(window.location.href).searchParams.get("code");

  useEffect(() => {
    if (code != null) {
      $.ajax({
        type: "POST",
        url: "https://kauth.kakao.com/oauth/token",
        data: {
          grant_type: "authorization_code",
          client_id: "0d653a32b09aca7c870400f582b4dfa7",
          redirect_uri: "http://localhost:3000/",
          code: code,
        },
        contentType: "application/x-www-form-urlencoded;charset=utf-8",
        dataType: null,
        success: function (response) {
          window.Kakao.Auth.setAccessToken(response.access_token);
        },
        error: function (jqXHR, error) {},
      }).then(() => {
        window.Kakao.API.request({
          url: "/v2/user/me",
        })
          .then(function (res) {
            dispatch(
              KakaoLoginActions.setLoginUserName(
                JSON.stringify(res.properties.nickname)
              )
            );
            // console.log(JSON.stringify(res.properties.nickname));
            // alert(JSON.stringify(res));
          })
          .catch(function (err) {
            console.log(
              "failed to request user information: " + JSON.stringify(err)
            );
            alert("failed to request user information: " + JSON.stringify(err));
          });
      });
    }
  }, [code]);

  return (
    <NavContent
      onClick={() => {
        dispatch(isModalClickedActions.toggle());
      }}
    >
      {KakaoLoginUserNickName === "" ? (
        <NavBtn>로그인/회원가입</NavBtn>
      ) : (
        <NavBtn>로그아웃</NavBtn>
      )}
    </NavContent>
  );
};

export default NavLogin;
