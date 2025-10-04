/**
 * CommitPR component displays the number of commits and PRs for a given date.
 * @param date - The date for which the commits and PRs are counted.
 * @param commits - The number of commits made on that date.
 * @param prs - The number of pull requests made on that date.
 * @returns {JSX.Element} A styled article element containing the date, commits, and PRs.
 */

interface CommitPRProps {
  date: string;
  commits: number;
  prs: number;
}

export function CommitPR({ date, commits, prs }: CommitPRProps) {
  return (
    <article className="flex w-[876px] h-[71px] items-center gap-6 border-t border-solid border-[#E5E8EB]">
      <div className="flex w-[175px] py-5 flex-col justify-center items-start flex-shrink-0">
        <span className="text-body-md-regular text-[#61758A]">{date}</span>
      </div>
      <div className="flex w-[677px] flex-col justify-center items-start">
        <span className="text-body-md-regular">
          Commits: {commits}, PRs: {prs}
        </span>
      </div>
    </article>
  );
}
