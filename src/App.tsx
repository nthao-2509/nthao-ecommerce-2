import React from 'react'
import { Route, Routes } from 'react-router-dom'
import { PublicRoute } from 'routes'
import { TypeRouteChildrenLv3, TypeRoutePublic, TypeViewChildrenRoute } from 'types/Types'

function App() {
  return (
    <Routes>
      {PublicRoute?.map((item: TypeRoutePublic, index: number) => {
        return (
          <Route path={item.path} element={item.component} key={index}>
            {item?.views?.map((view: TypeViewChildrenRoute, indexNumber: number) => (
              <>
                <Route index={view?.index} path={`${item.path}${view?.path}`} element={view.component} key={indexNumber} />
                {view?.views?.map((children: TypeRouteChildrenLv3, indexChildren: number) => (
                  <Route path={`${item.path}${view?.path}${children?.path}`} element={children.component} key={indexChildren} />
                ))}
              </>
            ))}
          </Route>
        )
      })}
    </Routes>
  )
}

export default App
