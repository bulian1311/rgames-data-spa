import React from 'react';
import { Props } from './tree-diagram.props';

export const TreeDiagram = ({ itemId, ...props }: Props): JSX.Element => {
  return (
    <div className="relative flex justify-center">
      <div className="text-center">
        <div className="flex flex-col justify-center items-center">
          <div className="w-16">
            <img
              className="block rounded-md m-auto shadow-md"
              alt="Tab Han"
              src="https://randomuser.me/api/portraits/men/46.jpg"
            />
          </div>
          <div className="text-gray-600"></div>
        </div>
        <ul className="flex flex-row mt-10 justify-center">
          <div className="-mt-10 border-l-2 absolute h-10 border-gray-400"></div>
          <li className="relative p-6">
            <div
              className="border-t-2 absolute h-8 border-gray-400 top-0"
              style={{ left: '50%', right: '0px' }}
            ></div>
            <div className="relative flex justify-center">
              <div className="-mt-6 border-l-2 absolute h-6 border-gray-400 top-0"></div>
              <div className="text-center">
                <div className="flex flex-col justify-center items-center">
                  <div className="w-16">
                    <img
                      className="block rounded-md m-auto shadow-md"
                      alt="Daniel Zhou"
                      src="https://randomuser.me/api/portraits/men/76.jpg"
                    />
                  </div>
                  <div className="text-gray-600"></div>
                </div>
                <ul className="flex flex-row mt-10 justify-center">
                  <div className="-mt-10 border-l-2 absolute h-10 border-gray-400"></div>
                  <li className="relative p-6">
                    <div
                      className="border-t-2 absolute h-8 border-gray-400 top-0"
                      style={{ left: '50%', right: '0px' }}
                    ></div>
                    <div className="relative flex justify-center">
                      <div className="-mt-6 border-l-2 absolute h-6 border-gray-400 top-0"></div>
                      <div className="text-center">
                        <div className="flex flex-col justify-center items-center">
                          <div className="w-16">
                            <img
                              className="block rounded-md m-auto shadow-md"
                              alt="Patrick Wang"
                              src="https://randomuser.me/api/portraits/men/55.jpg"
                            />
                          </div>
                          <div className="text-gray-600"></div>
                        </div>
                      </div>
                    </div>
                  </li>
                  <li className="relative p-6">
                    <div
                      className="border-t-2 absolute h-8 border-gray-400 top-0"
                      style={{ left: '0px', right: '50%' }}
                    ></div>
                    <div className="relative flex justify-center">
                      <div className="-mt-6 border-l-2 absolute h-6 border-gray-400 top-0"></div>
                      <div className="text-center">
                        <div className="flex flex-col justify-center items-center">
                          <div className="w-16">
                            <img
                              className="block rounded-md m-auto shadow-md"
                              alt="Jonsen Li"
                              src="https://randomuser.me/api/portraits/men/41.jpg"
                            />
                          </div>
                          <div className="text-gray-600"></div>
                        </div>
                      </div>
                    </div>
                  </li>
                </ul>
              </div>
            </div>
          </li>
          <li className="relative p-6">
            <div
              className="border-t-2 absolute h-8 border-gray-400 top-0"
              style={{ left: '0px', right: '0px' }}
            ></div>
            <div className="relative flex justify-center">
              <div className="-mt-6 border-l-2 absolute h-6 border-gray-400 top-0"></div>
              <div className="text-center">
                <div className="flex flex-col justify-center items-center">
                  <div className="w-16">
                    <img
                      className="block rounded-md m-auto shadow-md"
                      alt="Derek Hu"
                      src="https://randomuser.me/api/portraits/men/44.jpg"
                    />
                  </div>
                  <div className="text-gray-600"></div>
                </div>
                <ul className="flex flex-row mt-10 justify-center">
                  <div className="-mt-10 border-l-2 absolute h-10 border-gray-400"></div>
                  <li className="relative p-6">
                    <div
                      className="border-t-2 absolute h-8 border-gray-400 top-0"
                      style={{ left: '50%', right: '50%' }}
                    ></div>
                    <div className="relative flex justify-center">
                      <div className="-mt-6 border-l-2 absolute h-6 border-gray-400 top-0"></div>
                      <div className="text-center">
                        <div className="flex flex-col justify-center items-center">
                          <div className="w-16">
                            <img
                              className="block rounded-md m-auto shadow-md"
                              alt="Alfie Zu"
                              src="https://randomuser.me/api/portraits/men/25.jpg"
                            />
                          </div>
                          <div className="text-gray-600"></div>
                        </div>
                      </div>
                    </div>
                  </li>
                </ul>
              </div>
            </div>
          </li>
          <li className="relative p-6">
            <div
              className="border-t-2 absolute h-8 border-gray-400 top-0"
              style={{ left: '0px', right: '50%' }}
            ></div>
            <div className="relative flex justify-center">
              <div className="-mt-6 border-l-2 absolute h-6 border-gray-400 top-0"></div>
              <div className="text-center">
                <div className="flex flex-col justify-center items-center">
                  <div className="w-16">
                    <img
                      className="block rounded-md m-auto shadow-md"
                      alt="Lennis Chan"
                      src="https://randomuser.me/api/portraits/men/30.jpg"
                    />
                  </div>
                  <div className="text-gray-600"></div>
                </div>
              </div>
            </div>
          </li>
        </ul>
      </div>
    </div>
  );
};
