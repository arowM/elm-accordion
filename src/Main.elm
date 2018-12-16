module Main exposing (main)

import Accordion
import Browser
import Html exposing (Attribute, Html, div, text)
import Html.Attributes as Attributes exposing (class)
import Html.Lazy exposing (lazy)



-- APP


main : Program () Model Msg
main =
    Browser.element
        { init = \_ -> init
        , view = view
        , update = update
        , subscriptions = subscriptions
        }



-- MODEL


type alias Model =
    { accordion1 : Accordion.Model
    , accordion2 : Accordion.Model
    , accordion3 : Accordion.Model
    }


init : ( Model, Cmd Msg )
init =
    ( { accordion1 = Tuple.first Accordion.init
      , accordion2 = Tuple.first Accordion.init
      , accordion3 = Tuple.first Accordion.init
      }
    , Cmd.batch
        [ Cmd.map Accordion1 <| Tuple.second Accordion.init
        , Cmd.map Accordion2 <| Tuple.second Accordion.init
        , Cmd.map Accordion3 <| Tuple.second Accordion.init
        ]
    )



-- UPDATE


type Msg
    = Accordion1 Accordion.Msg
    | Accordion2 Accordion.Msg
    | Accordion3 Accordion.Msg


update : Msg -> Model -> ( Model, Cmd Msg )
update msg model =
    case msg of
        Accordion1 msg_ ->
            let
                ( accordion, cmd ) =
                    Accordion.update msg_ model.accordion1
            in
            ( { model
                | accordion1 = accordion
              }
            , Cmd.map Accordion1 cmd
            )

        Accordion2 msg_ ->
            let
                ( accordion, cmd ) =
                    Accordion.update msg_ model.accordion2
            in
            ( { model
                | accordion2 = accordion
              }
            , Cmd.map Accordion2 cmd
            )

        Accordion3 msg_ ->
            let
                ( accordion, cmd ) =
                    Accordion.update msg_ model.accordion3
            in
            ( { model
                | accordion3 = accordion
              }
            , Cmd.map Accordion3 cmd
            )



-- VIEW


view : Model -> Html Msg
view model =
    wrap
        [ wrap
            [ Html.map Accordion1 <|
                Accordion.view
                    (String.repeat 3 sampleText)
                    model.accordion1
            ]
        , wrap
            [ Html.map Accordion2 <|
                Accordion.view
                    (String.repeat 2 sampleText)
                    model.accordion2
            ]
        , wrap
            [ Html.map Accordion3 <|
                Accordion.view
                    (String.repeat 4 sampleText)
                    model.accordion3
            ]
        ]



-- View functions for layout.


wrap : List (Html msg) -> Html msg
wrap children =
    div [ class "wrap" ] children



-- SUBSCRIPTIONS


subscriptions : Model -> Sub Msg
subscriptions model =
    Sub.none



-- Helper functions


{-| Alternative to Html.Attributes.class.
It automatically generates composed class name by CSS modules.
-}
class : String -> Attribute msg
class name =
    Attributes.class <| "layout__" ++ name


sampleText : String
sampleText =
    """
Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
"""
