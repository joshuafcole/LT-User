(ns lt.plugins.user
  (:require [lt.object :as object]
            [lt.objs.tabs :as tabs]
            [lt.objs.command :as cmd])
  (:require-macros [lt.macros :refer [defui behavior]]))

;;; Emacs style buffer switching.
(behavior ::push-active-tab
          :triggers #{:active}
          :throttle 100
          :reaction (fn [this]
                      (object/assoc-in! tabs-extended [:last-tab] (:current-tab @tabs-extended))
                      (object/assoc-in! tabs-extended [:current-tab] this)))

(behavior ::last-tab
          :triggers #{:tab.last}
          :throttle 100
          :reaction (fn [this tab]
                      (when @tab
                        (tabs/active! tab))))

(cmd/command {:command :tabs.last
              :desc "Tab: Last tab"
              :exec (fn []
                      (object/raise tabs-extended :tab.last (:last-tab @tabs-extended)))})

(object/object* ::tabs-extended
                :last-tab (atom nil)
                :current-tab (atom nil)
                :tags #{:tabs-extended})

(def tabs-extended (object/create ::tabs-extended))

